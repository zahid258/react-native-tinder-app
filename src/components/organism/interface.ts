import { IUserList } from '../../interfaces/user-list.interface';

export interface ICarouselList {
  data: IUserList[];
  onSnapToItem?: (index: number) => void;
  handleFavorite?: (ike: boolean, id: number) => void;
  favorites?: boolean;
  handleRefresh?: () => void;
}
