import links from "@/lib/links";

export default function Footer() {
  return (
    <footer className="m500:text-sm dark:bg-secondaryBlack z-30 bg-white px-5 py-5 text-center font-base">
      Released under MIT License. The source code is available on{' '}
      <a
        target="_blank"
        href={links.github}
        className="font-heading underline"
      >
        Github
      </a>
      .
    </footer>
  )
}
