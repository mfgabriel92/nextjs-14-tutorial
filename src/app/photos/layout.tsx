interface Props {
  modal: React.ReactNode,
  children: React.ReactNode
}

export default function PhotosLayout({ modal, children }: Props) {
  return (
    <>
      {modal}
      {children}
    </>
  )
}