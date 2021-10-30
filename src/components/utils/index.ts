export const getGnbMenuName = (category: string) => {
  switch (category) {
    case 'community':
      return '커뮤니티'
    case 'store':
      return '스토어'
    case 'expert':
      return '인테리어시공'
    default:
      return '커뮤니티'
  }
}
