import Time "mo:core/Time";
import List "mo:core/List";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let messagesList = List.empty<ContactMessage>();

  public shared ({ caller }) func submitMessage(name : Text, email : Text, message : Text) : async () {
    let contactMessage : ContactMessage = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    messagesList.add(contactMessage);
  };

  public query ({ caller }) func getAllMessages() : async [ContactMessage] {
    messagesList.toArray();
  };
};
