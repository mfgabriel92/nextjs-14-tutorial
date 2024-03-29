interface Props {
  children: React.ReactNode,
  notifications: React.ReactNode,
  revenue: React.ReactNode,
  users: React.ReactNode,
  signin: React.ReactNode,
}

export default function Dashboard({ children, notifications, revenue, users, signin }: Props) {
  const isLoggedIn = false;

  return (
    <>
      {isLoggedIn ? (
        <>
          <div>{children}</div>
          <div className="flex">
            <div className="flex flex-col">
              <div>{users}</div>
              <div>{revenue}</div>
            </div>
            <div className="flex flex-1">
              {notifications}
            </div>
          </div>
        </>
      ) : (
        signin
      )}
    </>
  )
}
