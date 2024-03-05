interface Props {
  children: React.ReactNode
}

export function Card({ children }: Props) {
  return (
    <div className="p-10 m-2 border border-gray-100 flex justify-center items-center">
      {children}
    </div>
  )
}