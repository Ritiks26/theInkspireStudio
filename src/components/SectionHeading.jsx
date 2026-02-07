import "./SectionHeading.css";

export function SectionHeading({ heading }) {
  return (
    <ul className="section-heading">
      <li>{heading}</li>
    </ul>
  );
}
