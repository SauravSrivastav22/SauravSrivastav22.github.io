// Featured projects (link to the live GitHub repos)
const PROJECTS = [
  { tag: 'Backend · Database', name: '.NET Web API + EF Core', repo: 'dotnet-webapi-efcore-sqlserver',
    desc: '.NET 9 REST API with EF Core, SQL Server, migrations, seeding, pagination, search, and Swagger.' },
  { tag: 'Database · ETL', name: 'DB-to-DB Sync Tool', repo: 'db-to-db-sync-tool',
    desc: 'SQL Server → PostgreSQL pipeline with streaming reads and re-runnable batched upserts.' },
  { tag: 'Backend · Architecture', name: '.NET Microservices', repo: 'dotnet-microservices-orders',
    desc: 'Two .NET 9 microservices communicating over HTTP, orchestrated with docker-compose.' },
  { tag: 'Database', name: 'SQL Server T-SQL Toolkit', repo: 'sqlserver-tsql-scripts',
    desc: 'Schema design, stored procedures, window functions, indexing, and a SQL Agent job.' },
  { tag: 'Backend · Security', name: 'Minimal API + JWT Auth', repo: 'minimal-api-jwt-auth',
    desc: '.NET 9 Minimal API with JWT bearer authentication and role-based authorization.' },
  { tag: 'Frontend', name: 'Angular Admin Dashboard', repo: 'angular-admin-dashboard',
    desc: 'Angular 18 dashboard with stat cards and a data table, powered by RxJS and the async pipe.' },
  { tag: 'Backend', name: 'Blazor Server TaskBoard', repo: 'blazor-server-taskboard',
    desc: 'Interactive Blazor Server (.NET 9) app using the InteractiveServer render mode and DI.' },
  { tag: 'Database · Performance', name: 'SQL Query Optimization', repo: 'sql-query-optimization-demo',
    desc: 'Diagnosing and fixing a slow query with SARGable predicates and covering indexes.' },
  { tag: 'Cloud · DevOps', name: 'Dockerized .NET API', repo: 'dockerized-dotnet-api',
    desc: 'ASP.NET Core 9 API packaged with a multi-stage Dockerfile and docker-compose.' },
];

const USER = 'SauravSrivastav22';

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map((p) => `
    <article class="project-card">
      <span class="tag">${p.tag}</span>
      <h4>${p.name}</h4>
      <p>${p.desc}</p>
      <a class="repo-link" href="https://github.com/${USER}/${p.repo}" target="_blank" rel="noopener">View on GitHub →</a>
    </article>
  `).join('');
}

// Scroll-reveal animation
function setupReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  setupReveal();
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
