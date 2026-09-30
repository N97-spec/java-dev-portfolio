<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Portfolio content lives in `src/data/profile.ts` and is sourced only from Neha's resume; never add invented metrics, employers, or contact details — use visibly bracketed placeholders and ask for the real value.
- Visual identity is the "espresso-ink + amber" dark theme defined once in `src/styles.css` (`--background`, `--ember`, `--sage`, `--tok-*`); components use semantic tokens only, so a single token edit restyles the whole site.
