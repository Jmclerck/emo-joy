export interface Props {}

export function Robot(props: Props) {
  return (
    <p {...props}>
      <span aria-label="Robot Face Emoji" role="img">
        🤖
      </span>
    </p>
  );
}
