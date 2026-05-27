# bene-guard Demo Project

This project is **intentionally insecure** — it exists to demonstrate what bene-guard detects in VS Code.

## Open this folder in VS Code with bene-guard installed to see:

### CVE findings (npm)
- `lodash@4.17.11` — CVE-2021-23337 (command injection, critical)
- `axios@0.18.0` — CVE-2020-28168 (SSRF, moderate)
- `minimist@1.2.0` — CVE-2021-44906 (prototype pollution, critical)
- `handlebars@4.0.12` — CVE-2019-20920 (prototype pollution, high)
- `follow-redirects@1.14.7` — CVE-2022-0155 (info disclosure, moderate)
- `ws@7.4.4` — CVE-2021-32640 (ReDoS, moderate)
- `tar@4.4.13` — CVE-2021-37712 (path traversal, high)

### CVE findings (Python)
- `Django@2.2.0` — multiple CVEs
- `Pillow@8.0.0` — CVE-2021-25287 (buffer overflow, critical)
- `PyYAML@5.1` — CVE-2020-14343 (arbitrary code execution, critical)
- `requests@2.18.0` — CVE-2018-18074 (info disclosure)

### Hardcoded secrets (app.js)
- Generic API keys (`api_key`, `apiKey` assignments)
- Hardcoded password (`password` assignment)
- Client secret (`client_secret` assignment)
- Access token (`access_token` assignment)
- Auth token (`auth_token` assignment)
- JWT secrets (`jwt_secret`, `jwtSecret` assignments)

> All values in this project are clearly fake demo strings. They match bene-guard's
> generic secret detection patterns but are not real credentials.

### Header misconfigurations (next.config.js)
- Missing Content-Security-Policy
- Missing X-Frame-Options
- Missing Strict-Transport-Security
- Wildcard CORS (Access-Control-Allow-Origin: *)
