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
          For the Welcome Party, I wanted people to have a choice: a quieter
          place to talk, a group game to join, or somewhere to get food and
          drinks. Planning meant working out the spaces, the script, and how
          people would move between activities.
        </p>
        <p>
          The NFC activity had a different idea: collect students’ music
          recommendations and hide a selection around campus for people to find.
          Intertextuality brought writing, research, engineering, and
          AI-assisted exploration into the same competition.
        </p>
        <p>
          Some events were mine to lead. For others, I took on a smaller part of
          the team’s work.
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
