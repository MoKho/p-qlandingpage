# Deploying this Vite app to Cloud Run via Cloud Build

This repository is a static Vite React app. The included `cloudbuild.yaml` and `Dockerfile` let you build a container image, push it to Container Registry, and deploy to Cloud Run using Cloud Build triggers connected to your GitHub repository.

Quick checklist before connecting a GitHub repo:
- Enable the Cloud Run API and Cloud Build API in your Google Cloud project.
- Ensure the Cloud Build service account (PROJECT_NUMBER@cloudbuild.gserviceaccount.com) has the roles:
  - roles/run.admin (Cloud Run Admin)
  - roles/iam.serviceAccountUser (Service Account User)
  - roles/storage.admin or permission to push to Container Registry / Artifact Registry

How it works (files added):
- `Dockerfile` — multi-stage: builds with Node 18 and serves built `dist` with nginx.
- `nginx.conf` — nginx config to enable SPA fallback to `index.html`.
- `.dockerignore` — keeps build context small.
- `cloudbuild.yaml` — Cloud Build pipeline to build/push image and deploy to Cloud Run.

Connecting GitHub and creating a trigger:
1. In Cloud Console -> Cloud Build -> Triggers, create a GitHub trigger and connect your repo.
2. Use `cloudbuild.yaml` as the build config.
3. Optionally set substitutions for `_REGION` and `_SERVICE_NAME` in the trigger settings.

Local test (recommended):
1. Install deps: `npm ci`
2. Build: `npm run build` (the output will be in `dist/`)
3. Serve locally for a quick check: `npx serve dist` or `npx http-server dist`

Notes & troubleshooting:
- If you prefer Artifact Registry instead of Container Registry, modify `cloudbuild.yaml` push step accordingly.
- If you want to run Node server instead of nginx, update the Dockerfile to use `node` runtime and a `start` script.
