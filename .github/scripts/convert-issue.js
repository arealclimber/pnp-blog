const { Octokit } = require('@octokit/rest')
const matter = require('gray-matter')
const fs = require('fs')
const path = require('path')

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

async function main() {
  // 使用 GitHub API 獲取 issue 內容
  const context = JSON.parse(process.env.GITHUB_CONTEXT || '{}')
  const { owner, repo } = context.repository || {}
  const issueNumber = context.event.issue.number

  const { data: issue } = await octokit.issues.get({
    owner,
    repo,
    issue_number: issueNumber,
  })

  // 從 issue 標題產生檔名
  const fileName = issue.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  // 準備 frontmatter
  const frontmatter = {
    title: issue.title,
    date: new Date().toISOString().split('T')[0],
    tags: issue.labels.map((label) => label.name).filter((name) => name !== 'convert-to-post'),
    draft: false,
    summary: issue.body.split('\n')[0], // 使用第一行作為摘要
  }

  // 建立 MDX 內容
  const content = matter.stringify(issue.body, frontmatter)

  // 寫入檔案
  const filePath = path.join('data/blog', `${fileName}.mdx`)
  fs.writeFileSync(filePath, content)
}

main().catch(console.error)
