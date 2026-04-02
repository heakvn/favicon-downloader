"use client";
import { appConfig } from "@/config";

export function Footer() {
  return (
    <footer className="container py-4 text-center text-sm text-muted-foreground mt-10">
      <div className="my-3 flex items-center justify-center gap-3">
        <b>DigitalPlat: </b>
        <a href="https://dash.domain.digitalplat.org/signup?ref=DP0pecdU5m/" className="text-primary flex items-center">
          <img alt="DigitalPlat FreeDomain" src="https://www.faviconextractor.com/favicon/digitalplat.org" className="h-5 w-5 mr-1 rounded-full bg-secondary" width={20} height={20} />
          <span>This Website is Powered by DigitalPlat FreeDomain,Get a free domain from DigitalPlat</span>  
        </a>
      </div>
      <span>
        © {new Date().getFullYear()} <a href="https://favicon.qvv.qzz.io">{appConfig.appName}</a>. All rights reserved.
      </span>
    </footer>
  );
}
