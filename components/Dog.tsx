interface Props {}

function Dog(props: Props) {
  return (
    <p {...props}>
      <span aria-label="Dog Face Emoji" role="img">
        🐶
      </span>
    </p>
  );
}

export { Dog };
