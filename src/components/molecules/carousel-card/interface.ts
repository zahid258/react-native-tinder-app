import { IUserList } from '../../../interfaces/user-list.interface';

export interface ICarouselCard {
  item: IUserList;
  handleFavorite?: (like: boolean, id: number) => void;
  handleRefresh?: () => void;
  favorites?: boolean;
}
