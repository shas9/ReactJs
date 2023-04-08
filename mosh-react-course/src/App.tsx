import ExpandableText from "./components/ExpandableText";

const App = () => {
  return (
    <div>
      <ExpandableText maxLength={10}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        rhoncus nisi enim, quis blandit purus pretium non. Curabitur ac lobortis
        lorem. In lacinia nec massa iaculis suscipit. Mauris luctus ipsum mi,
        nec congue erat suscipit euismod. Integer egestas arcu vel neque
        efficitur ultricies. Integer vitae eleifend mi. Nullam nec sapien dui.
        Sed malesuada condimentum orci, non ultricies nisl fermentum ut. In hac
        habitasse platea dictumst. Aliquam erat volutpat. Proin bibendum sem in
        tortor tempor, sed scelerisque est feugiat. Etiam eu facilisis libero,
        at mattis sapien. Proin commodo, risus quis egestas venenatis, dolor
        ante semper est, at dapibus augue sapien vel ipsum. Vivamus condimentum
        ipsum risus, a ullamcorper mauris maximus eget. Vestibulum in sapien
        nunc. Duis rutrum pulvinar tellus, sed fermentum neque.
      </ExpandableText>
    </div>
  );
};

export default App;
