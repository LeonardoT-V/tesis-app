import { Pagination } from '@nextui-org/react'

function PaginationEditorFooter() {
  return (
    <Pagination
      size="lg"
      isCompact
      showControls
      showShadow
      color="primary"
      page={0}
      total={10}
      //onChange={onPaginationChange}
    />
  )
}

export default PaginationEditorFooter
