import { Title } from "./Title.styled";

export function SectionTitle({title, children}) {
    return (
      <div>
            <Title className="title">{title}</Title>
            { children}
        </div>
  );
}


