import { activityGroups } from "@/content/activity-events";

export function ActivityRecord() {
  return (
    <section
      id="asb-events"
      className="activity-record"
      aria-labelledby="activity-title"
    >
      <div className="activity-intro">
        <p className="section-label">ASB / behind the events</p>
        <h2 id="activity-title">What I actually worked on.</h2>
        <p>
          For the Welcome Party, I planned a quiet place to talk, a group game,
          and food and drinks. Different people could join in differently.
        </p>
        <p>
          Leading also meant listening before assigning work, noticing when a
          teammate had too much, and changing the workflow instead of adding
          pressure. Some events were mine to lead; in others, I took one useful
          part and did it well.
        </p>
      </div>
      <div className="event-groups">
        {activityGroups.map((group) => (
          <details key={group.title} open={group.role === "Main lead"}>
            <summary>
              <span>{group.title}</span>
              <span className="event-role">
                {group.role} · {group.events.length} events
              </span>
            </summary>
            <dl>
              {group.events.map(([name, description]) => (
                <div key={name}>
                  <dt>{name}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </details>
        ))}
      </div>
    </section>
  );
}
