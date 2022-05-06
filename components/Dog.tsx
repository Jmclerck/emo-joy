interface Props {}

export default function Dog(props: Props) {
  return (
    <p {...props}>
      <span aria-label="Dog Face Emoji" role="img">
        🐶
      </span>
    </p>
  );
}
