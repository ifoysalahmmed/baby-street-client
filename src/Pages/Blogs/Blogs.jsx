import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");

  return (
    <div className="mt-8 space-y-6">
      <div tabIndex={0} className="collapse group rounded-md">
        <div className="collapse-title bg-primary text-xl font-semibold text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            An access token is a credential that represents the authorization
            granted to a client application to access protected resources on
            behalf of a user. It is typically a string of characters that is
            issued by an authentication server after a user successfully
            authenticates.
          </p>
          <p>
            A refresh token is a credential that is used to obtain a new access
            token without requiring the user to reauthenticate. It is typically
            issued along with the access token and has a longer expiration time.
          </p>
          <p>
            The client application typically includes the access token in the
            &quot;Authorization&quot; header of API requests, using a specified
            authentication scheme. The server validates the access token and
            grants or denies access to the requested resources based on the
            token&apos;s validity and the associated user&apos;s permissions.
          </p>
          <p>
            Refresh tokens, on the other hand, should be stored in a secure,
            long-lived storage mechanism, such as a secure HTTP-only cookie or a
            local storage mechanism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
