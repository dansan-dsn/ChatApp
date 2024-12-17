import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);
  console.log("Recipient User", recipientUser);
  return <>User chat</>;
};

export default UserChat;
