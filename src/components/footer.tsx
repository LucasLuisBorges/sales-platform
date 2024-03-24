import { Icons } from "@/components/icons";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border items-center justify-between sm:flex">
      <p className="text-muted-foreground text-center">
        © {new Date().getFullYear()} Lunger. Todos direitos reservados.
      </p>
      <div className="flex items-center justify-center gap-x-6 text-muted-foreground mt-6 sm:mt-0">
        <a href="/" target="_blank" aria-label="social media">
          <Icons.twitter className="w-6 h-6 fill-muted-foreground hover:fill-foreground duration-150" />
        </a>
        <a href="/" target="_blank" aria-label="social media">
          <Icons.instagram className="w-6 h-6 fill-muted-foreground hover:fill-foreground duration-150" />
        </a>
      </div>
    </footer>
  );
}
