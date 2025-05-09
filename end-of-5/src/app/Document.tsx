import { TurnstileScript } from "@redwoodjs/sdk/turnstile";

export const Document: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Applywize</title>
      <TurnstileScript />
      <script type="module" src="/src/client.tsx"></script>
      <link rel="stylesheet" href="/src/app/styles.css" />
    </head>
    <body>
      <div id="root">{children}</div>
    </body>
  </html>
);
