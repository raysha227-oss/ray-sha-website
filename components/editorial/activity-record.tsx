import { activityGroups } from "@/content/activity-events";
import { galleries } from "@/content/galleries";
import { PhotoSlider } from "./photo-slider";

export function ActivityRecord() {
  return (
    <section
      id="asb-events"
      className="activity-record"
      aria-labelledby="activity-title"
    >
      <div className="activity-overview">
        <div className="activity-intro">
          <p className="section-label">ASB / behind the events</p>
          <h2 id="activity-title">What I actually worked on.</h2>
          <p>
            As Vice President and then President, I helped turn half-finished
            ideas into events people could actually join. For the Welcome Party,
            that meant a quiet place to talk, a group game, and food and drinks.
          </p>
          <p>
            I asked what people wanted to take on, changed the plan when someone
            had too much, and left room for ideas better than mine. Some events
            were mine to lead; in others, I took one useful part and did it
            well.
          </p>
        </div>
        <PhotoSlider
          label="ASB events"
          photos={galleries.asb}
          variant="window"
        />
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
