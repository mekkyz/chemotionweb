// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Section')
    .items([
      S.documentTypeListItem('section').title('Section'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && item.getId() !== 'section'
      ),
    ]);