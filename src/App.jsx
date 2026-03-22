import { useEffect, useState } from "react";
import { marked } from "marked";

const programDataUrl = `${import.meta.env.BASE_URL}programData.json`;

const linkRenderer = new marked.Renderer();
linkRenderer.link = function ({ href, title, tokens }) {
  const text = this.parser.parseInline(tokens);
  const titleAttr = title ? ` title="${title}"` : "";
  return `<a href="${href}" target="_blank" rel="noreferrer"${titleAttr}>${text}</a>`;
};

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer: linkRenderer,
});

const phaseColors = ["phase-shell", "phase-pulse", "phase-tide", "phase-ember"];

function markdownToHtml(markdown) {
  return { __html: marked.parse(markdown || "") };
}

function searchMatches(value, query) {
  if (!query) return true;
  return value.toLowerCase().includes(query.toLowerCase());
}

function formatFrontmatterLabel(value) {
  return String(value).replace(/_/g, " ");
}

function App() {
  const [programData, setProgramData] = useState(null);
  const [selectedType, setSelectedType] = useState("dashboard");
  const [selectedId, setSelectedId] = useState("");
  const [selectedDay, setSelectedDay] = useState("Saturday");
  const [query, setQuery] = useState("");
  const [timerPaused, setTimerPaused] = useState(false);
  const [seconds, setSeconds] = useState(120 * 60);

  useEffect(() => {
    let cancelled = false;

    async function loadProgramData() {
      const response = await fetch(programDataUrl);
      const payload = await response.json();
      if (!cancelled) {
        setProgramData(payload);
        setSelectedId(payload.weeks[0]?.id ?? "");
        setSelectedDay(payload.dayOrder[0] ?? "Saturday");
      }
    }

    loadProgramData();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (timerPaused) return;
    const timer = window.setInterval(() => {
      setSeconds((previous) => (previous > 0 ? previous - 1 : 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [timerPaused]);

  const selectedWeek =
    !programData || selectedType !== "week"
      ? null
      : programData.weeks.find((week) => week.id === selectedId) ?? programData.weeks[0];

  const currentNote =
    !programData
      ? null
      : selectedType === "phase"
        ? programData.phases.find((phase) => phase.id === selectedId)
        : selectedType === "resource"
          ? programData.resources.find((resource) => resource.id === selectedId)
          : selectedType === "tool"
            ? programData.tools.find((tool) => tool.id === selectedId)
            : selectedType === "concept"
              ? programData.concepts.find((concept) => concept.id === selectedId)
              : selectedType === "admin"
                ? programData.admin.find((note) => note.id === selectedId)
                : selectedType === "overview"
                  ? programData.overview
                  : null;

  useEffect(() => {
    if (!selectedWeek) return;
    setSelectedDay(selectedWeek.daySections[0]?.heading.split(" - ")[0] ?? "Saturday");
  }, [selectedId, selectedWeek]);

  if (!programData) {
    return (
      <div className="shell loading-shell">
        <main className="content loading-state">
          <section className="hero-card compact">
            <div className="hero-copy">
              <p className="eyebrow">Loading</p>
              <h2>Building the study board from your generated markdown.</h2>
              <p>The app loads the program and vault notes as structured JSON at runtime.</p>
            </div>
          </section>
        </main>
      </div>
    );
  }

  const filteredWeeks = programData.weeks.filter((week) =>
    searchMatches(`${week.title} ${week.phase} ${(week.focus || []).join(" ")}`, query),
  );
  const filteredResources = programData.resources.filter((note) =>
    searchMatches(`${note.title} ${note.markdown}`, query),
  );
  const filteredTools = programData.tools.filter((note) =>
    searchMatches(`${note.title} ${note.markdown}`, query),
  );
  const filteredConcepts = programData.concepts.filter((note) =>
    searchMatches(`${note.title} ${note.markdown}`, query),
  );
  const filteredAdmin = programData.admin.filter((note) =>
    searchMatches(`${note.title} ${note.markdown}`, query),
  );

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">OP</div>
          <div>
            <p className="eyebrow">React Study Board</p>
            <h1>offensive_program_kit</h1>
          </div>
        </div>

        <label className="search">
          <span>Search notes and weeks</span>
          <input
            type="text"
            placeholder="Week 12, PortSwigger, privesc..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <nav className="sidebar-nav">
          <button
            className={`nav-chip ${selectedType === "dashboard" ? "active" : ""}`}
            onClick={() => setSelectedType("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`nav-chip ${selectedType === "overview" ? "active" : ""}`}
            onClick={() => {
              setSelectedType("overview");
              setSelectedId(programData.overview.id);
            }}
          >
            Program Overview
          </button>
        </nav>

        <SidebarGroup title="Phases">
          {programData.phases.map((phase, index) => (
            <SidebarButton
              key={phase.id}
              active={selectedType === "phase" && selectedId === phase.id}
              accentClass={phaseColors[index]}
              title={phase.title}
              meta={phase.range}
              onClick={() => {
                setSelectedType("phase");
                setSelectedId(phase.id);
              }}
            />
          ))}
        </SidebarGroup>

        <SidebarGroup title="Weeks">
          {filteredWeeks.map((week) => (
            <SidebarButton
              key={week.id}
              active={selectedType === "week" && selectedId === week.id}
              title={week.title}
              meta={`Week ${String(week.week).padStart(2, "0")} · ${week.phase.replace("Phase ", "P")}`}
              onClick={() => {
                setSelectedType("week");
                setSelectedId(week.id);
              }}
            />
          ))}
        </SidebarGroup>

        <SidebarGroup title="Resources">
          {filteredResources.map((resource) => (
            <SidebarButton
              key={resource.id}
              active={selectedType === "resource" && selectedId === resource.id}
              title={resource.title.replace(/^#\s*/, "")}
              onClick={() => {
                setSelectedType("resource");
                setSelectedId(resource.id);
              }}
            />
          ))}
        </SidebarGroup>

        <SidebarGroup title="Tools">
          {filteredTools.map((tool) => (
            <SidebarButton
              key={tool.id}
              active={selectedType === "tool" && selectedId === tool.id}
              title={tool.title}
              onClick={() => {
                setSelectedType("tool");
                setSelectedId(tool.id);
              }}
            />
          ))}
        </SidebarGroup>

        <SidebarGroup title="Concepts">
          {filteredConcepts.map((concept) => (
            <SidebarButton
              key={concept.id}
              active={selectedType === "concept" && selectedId === concept.id}
              title={concept.title}
              onClick={() => {
                setSelectedType("concept");
                setSelectedId(concept.id);
              }}
            />
          ))}
        </SidebarGroup>

        <SidebarGroup title="Admin">
          {filteredAdmin.map((note) => (
            <SidebarButton
              key={note.id}
              active={selectedType === "admin" && selectedId === note.id}
              title={note.title}
              onClick={() => {
                setSelectedType("admin");
                setSelectedId(note.id);
              }}
            />
          ))}
        </SidebarGroup>
      </aside>

      <main className="content">
        {selectedType === "dashboard" && (
          <DashboardView
            data={programData}
            seconds={seconds}
            timerPaused={timerPaused}
            onToggleTimer={() => setTimerPaused((previous) => !previous)}
            onSelectWeek={(weekId) => {
              setSelectedType("week");
              setSelectedId(weekId);
            }}
            onSelectResource={(resourceId) => {
              setSelectedType("resource");
              setSelectedId(resourceId);
            }}
          />
        )}

        {selectedType === "week" && selectedWeek && (
          <WeekView
            week={selectedWeek}
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
          />
        )}

        {selectedType !== "dashboard" && selectedType !== "week" && currentNote && (
          <DocumentView note={currentNote} type={selectedType} />
        )}
      </main>
    </div>
  );
}

function SidebarGroup({ title, children }) {
  return (
    <section className="sidebar-group">
      <h2>{title}</h2>
      <div className="sidebar-stack">{children}</div>
    </section>
  );
}

function SidebarButton({ active, title, meta, onClick, accentClass = "" }) {
  return (
    <button className={`sidebar-button ${active ? "active" : ""} ${accentClass}`} onClick={onClick}>
      <span>{title}</span>
      {meta ? <small>{meta}</small> : null}
    </button>
  );
}

function DashboardView({ data, seconds, timerPaused, onToggleTimer, onSelectWeek, onSelectResource }) {
  const currentWeek = data.weeks[0];
  return (
    <>
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">24-week command board</p>
          <h2>Study plan, vault structure, and resource launchpad in one React shell.</h2>
          <p>
            The app is sourced from the generated markdown in this repo. You can move from phase overview
            to day-level execution without leaving the same interface.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => onSelectWeek(currentWeek.id)}>
              Open Week 01
            </button>
            <button className="secondary-button" onClick={() => onSelectResource(data.resources[0].id)}>
              Open resources
            </button>
          </div>
        </div>
        <div className="hero-board">
          <SplitFlapBoard rows={data.toolRows} />
        </div>
      </section>

      <section className="dashboard-grid">
        <CadenceCard data={data.cadence} seconds={seconds} timerPaused={timerPaused} onToggleTimer={onToggleTimer} />
        <PhaseProgressCard phases={data.phases} weeks={data.weeks} onSelectWeek={onSelectWeek} />
        <ProgramOverviewCard note={data.overview} />
        <ResourceLaunchpadCard resources={data.resources} onSelectResource={onSelectResource} />
      </section>
    </>
  );
}

function SplitFlapBoard({ rows }) {
  return (
    <div className="split-board">
      {rows.map((row) => (
        <div className="split-row" key={row.label}>
          <span className="split-label">{row.label}</span>
          <div className="split-cells">
            {row.value.split("").map((char, index) => (
              <span className={`split-cell ${char === " " ? "dim" : ""}`} key={`${row.label}-${index}`}>
                {char === " " ? "" : char}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CadenceCard({ data, seconds, timerPaused, onToggleTimer }) {
  const selectedIndex = data.findIndex((item) => item.day === "Wednesday");
  return (
    <article className="card light-card cadence-card">
      <div className="card-head">
        <span className="icon-badge">⏱</span>
        <div>
          <p className="eyebrow">Weekly cadence</p>
          <h3>Saturday-first execution rhythm</h3>
        </div>
      </div>

      <div className="task-shell">
        <div>
          <p className="task-title">Anchor block</p>
          <p className="task-subtitle">Wednesday deep work or weekend target push</p>
        </div>
        <div className="timer-pill">
          <span>{formatSeconds(seconds)}</span>
          <button onClick={onToggleTimer}>{timerPaused ? "Resume" : "Pause"}</button>
        </div>
      </div>

      <div className="cadence-bars">
        {data.map((item, index) => (
          <div className="bar-group" key={item.day}>
            <div
              className={`cadence-bar ${index === selectedIndex ? "active" : ""} ${item.active === "Rest" ? "rest" : ""}`}
              style={{ height: item.active === "Rest" ? "24%" : item.active === "120m" ? "48%" : "90%" }}
            />
            <span>{item.day.slice(0, 3)}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function PhaseProgressCard({ phases, weeks, onSelectWeek }) {
  return (
    <article className="card dark-card">
      <div className="card-head">
        <span className="icon-badge inverse">▣</span>
        <div>
          <p className="eyebrow">Phase map</p>
          <h3>Progression from foundations to OSCP track</h3>
        </div>
      </div>

      <div className="phase-list">
        {phases.map((phase, index) => {
          const phaseWeeks = weeks.filter((week) => week.phase === phase.title);
          return (
            <button className={`phase-item ${phaseColors[index]}`} key={phase.id} onClick={() => onSelectWeek(phaseWeeks[0].id)}>
              <strong>{phase.title}</strong>
              <span>{phase.range}</span>
              <small>{phaseWeeks[0]?.title}</small>
            </button>
          );
        })}
      </div>
    </article>
  );
}

function ProgramOverviewCard({ note }) {
  return (
    <article className="card light-card markdown-card">
      <div className="card-head">
        <span className="icon-badge">⌘</span>
        <div>
          <p className="eyebrow">Program overview</p>
          <h3>{note.title}</h3>
        </div>
      </div>

      <div className="markdown-body" dangerouslySetInnerHTML={markdownToHtml(note.intro)} />
      <div className="pill-row">
        {note.sections.slice(0, 4).map((section) => (
          <span className="text-pill" key={section.heading}>
            {section.heading}
          </span>
        ))}
      </div>
    </article>
  );
}

function ResourceLaunchpadCard({ resources, onSelectResource }) {
  return (
    <article className="card light-card">
      <div className="card-head">
        <span className="icon-badge">↗</span>
        <div>
          <p className="eyebrow">Resource launchpad</p>
          <h3>Direct entry points for the study stack</h3>
        </div>
      </div>

      <div className="resource-grid">
        {resources.map((resource) => (
          <button className="resource-button" key={resource.id} onClick={() => onSelectResource(resource.id)}>
            <strong>{resource.title}</strong>
            <small>{resource.sections.find((section) => section.heading === "Direct links") ? "Direct links included" : "Vault note"}</small>
          </button>
        ))}
      </div>
    </article>
  );
}

function WeekView({ week, selectedDay, onSelectDay }) {
  const activeSection =
    week.daySections.find((section) => section.heading.startsWith(selectedDay)) ?? week.daySections[0];
  const infoSections = week.overviewSections.filter((section) =>
    ["Weekly focus", "Expected weekly outcomes", "Tools used this week", "Required artifacts this week", "If behind schedule"].includes(section.heading),
  );

  return (
    <>
      <section className="hero-card compact">
        <div className="hero-copy">
          <p className="eyebrow">{week.phase}</p>
          <h2>{week.title}</h2>
          <p>{week.intro || "Detailed weekly execution plan with explicit time blocks, outputs, and review prompts."}</p>
          <div className="pill-row">
            <span className="text-pill strong">Week {String(week.week).padStart(2, "0")}</span>
            {week.focus.map((item) => (
              <span className="text-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="week-layout">
        <div className="week-main">
          <div className="day-tabs">
            {week.daySections.map((section) => {
              const day = section.heading.split(" - ")[0];
              return (
                <button
                  className={`day-tab ${day === selectedDay ? "active" : ""}`}
                  key={day}
                  onClick={() => onSelectDay(day)}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <article className="card light-card markdown-card">
            <div className="card-head">
              <span className="icon-badge">□</span>
              <div>
                <p className="eyebrow">Day plan</p>
                <h3>{activeSection.heading}</h3>
              </div>
            </div>

            <div className="markdown-body" dangerouslySetInnerHTML={markdownToHtml(activeSection.body)} />
          </article>
        </div>

        <aside className="week-side">
          <article className="card dark-card">
            <div className="card-head">
              <span className="icon-badge inverse">◇</span>
              <div>
                <p className="eyebrow">Deliverables</p>
                <h3>Week output stack</h3>
              </div>
            </div>
            <div className="pill-column">
              {week.deliverables.map((item) => (
                <span className="text-pill strong" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>

          {infoSections.map((section) => (
            <article className="card light-card markdown-card" key={section.heading}>
              <div className="card-head">
                <span className="icon-badge">+</span>
                <div>
                  <p className="eyebrow">Week detail</p>
                  <h3>{section.heading}</h3>
                </div>
              </div>
              <div className="markdown-body" dangerouslySetInnerHTML={markdownToHtml(section.body)} />
            </article>
          ))}
        </aside>
      </section>
    </>
  );
}

function DocumentView({ note, type }) {
  return (
    <>
      <section className="hero-card compact">
        <div className="hero-copy">
          <p className="eyebrow">{type}</p>
          <h2>{note.title}</h2>
          <p>{note.filePath}</p>
        </div>
      </section>

      <article className="card light-card markdown-card">
        {Object.keys(note.frontmatter || {}).length > 0 ? (
          <div className="meta-grid">
            {Object.entries(note.frontmatter).map(([key, value]) => (
              <div className="meta-card" key={key}>
                <span>{formatFrontmatterLabel(key)}</span>
                <strong>{Array.isArray(value) ? value.join(", ") : String(value)}</strong>
              </div>
            ))}
          </div>
        ) : null}

        <div className="markdown-body" dangerouslySetInnerHTML={markdownToHtml(note.markdown)} />
      </article>
    </>
  );
}

function formatSeconds(total) {
  const hours = String(Math.floor(total / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const seconds = String(total % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

export default App;
