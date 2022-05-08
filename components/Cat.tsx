interface Props {}

function Cat(props: Props) {
  return (
    <p {...props}>
      <span aria-label="Cat Face Emoji" role="img">
        🐱
      </span>
    </p>
  );
}

export { Cat };
