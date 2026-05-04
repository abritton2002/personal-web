# Sweepr Link Registry Context

<!-- Installed by Sweepr. Safe for the Sweepr package to replace. -->

- Root: C:\Users\alex.britton\projects\personal-web
- Generated: 2026-05-04T18:26:02.533Z
- Purpose: point coding agents at Sweepr's documentation-link workflow.
- Dashboard role: stores connected repositories, repo-doc links, and Notion-doc links.
- Registry auth: run sweepr-code login to connect this machine to Sweepr's hosted registry, then sweepr-code registry --json to fetch the signed-in user's repositories and links.
- Repo discovery: intentionally not performed by the Sweepr package.

## Agent Notes

- Start with fast documentation triage before deep repo ingestion.
- Use dashboard-provided repositories and links only as the external documentation registry.
- When links are unavailable, ask for the GitHub repo, repo doc path, or Notion URL instead of guessing.
- Preserve user changes and follow repo instructions found during the agent session.
- Search generated or high-volume paths only when a concrete doc claim requires it.
