export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jahan Zaib Ahmed. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
