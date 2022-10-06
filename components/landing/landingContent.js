import useCurrentUser from "../../modules/authentication/hooks/use-current-user";
import useAuthError from "../../modules/authentication/hooks/use-error";
import WelcomeUnknown from "./welcomeUnknown";
import WelcomeBack from "./welcomeBack";
import WelcomeSkeleton from "./welcomeSkeleton";

function LandingContent() {
  const currentUser = useCurrentUser();
  const error = useAuthError();
  if (currentUser === undefined && error === undefined) {
    return <WelcomeSkeleton />;
  }

  if (error) {
    return <WelcomeUnknown />;
  }

  return <WelcomeBack userName={currentUser.name} />;
}

export default LandingContent;
