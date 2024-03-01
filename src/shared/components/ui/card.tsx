import * as React from "react"

import { cn } from "../../../utils/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg bg-white text-zinc-950 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700",
        className
      )}
      style={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
      }}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "p-4 text-lg font-semibold text-gray-800 hover:text-gray-900 transition-colors",
        className
      )}
      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)" }}
      {...props}
    >
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight text-center", className)}
    style={{ fontSize: '1.6rem', margin: '0' }}
    {...props}
  >
    {children || "Título do Cartão"} {/* Adiciona um texto padrão se nenhum conteúdo for fornecido */}
  </h1>
))
CardTitle.displayName = "CardTitle"


const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0 text-center w-full text-lg", className)}
    style={{ fontSize: '1.4rem', margin: '0' }}
    {...props}
  >
    {children || "Conteúdo do Cartão"} {/* Adiciona um texto padrão se nenhum conteúdo for fornecido */}
  </div>
))
CardContent.displayName = "CardContent"


const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
