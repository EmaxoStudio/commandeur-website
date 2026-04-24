# Commandeur

Website rebuild project.

## Structure

```
/frontend       Static frontend — HTML, CSS, JS
/backend        Server-side application code
  /app          Application modules and routes
  requirements.txt  Python dependencies
/docs           Project documentation
```

## Phases

- **Phase 1** — Public website (current)
- **Phase 2** — Admin system (future)

## Local Preview

Run from the project root:

```bash
python3 -m http.server 8080
```

Then open: `http://localhost:8080/frontend/index.html`

No build step required. All assets are served via relative paths from the project root.
