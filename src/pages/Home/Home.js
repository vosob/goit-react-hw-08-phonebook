import { Title, Text, Main, TextS, List } from './Home.styled';

const Home = () => {
  return (
    <Main>
      <Title>
        Welcome to PHONE BOOK – Your Ultimate Task Management Solution!
      </Title>
      <Text>
        Stay organized, boost productivity, and achieve your goals with
        TaskMaster, the intuitive todo app designed to simplify your life.
        Whether you're a busy professional, a student juggling assignments, or
        someone simply looking to manage daily tasks efficiently, TaskMaster has
        got you covered.
      </Text>
      <TextS>Key Features:</TextS>
      <ol>
        <List>
          <b>Easily create contacts:</b> Quickly add contacts with just a few
          clicks.
        </List>
        <List>
          <b>User-friendly interface:</b> Easily navigate your PHONE BOOK with
          the clean and intuitive design.
        </List>
        <List>
          <b>Collaboration made easy:</b> Share contacts with colleagues,
          friends, or or family members.
        </List>
      </ol>
    </Main>
  );
};
export default Home;
