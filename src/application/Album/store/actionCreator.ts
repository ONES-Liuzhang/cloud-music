import { AlbumActions, AlbumData } from './constants';
import { getAlbumDetailRequest } from '../../../api/request'
import { fromJS } from 'immutable';
import { Dispatch } from 'redux';

export const changeAlbumData = (data: AlbumData): AlbumActions => ({
  type: "album/change_current_album",
  data: fromJS(data) as ObjWithImmutable<AlbumData>
})

export const changeEnterLoading = (data: boolean): AlbumActions => ({
  type: "album/change_enter_loading",
  data: data
})

export const getAlbumDetail = (id: number) => {
  return (dispatch: Dispatch<AlbumActions>) => {
    dispatch(changeEnterLoading(true))

    getAlbumDetailRequest(id).then((res) => {
      const data = res.playlist
      dispatch(changeAlbumData(data))
      dispatch(changeEnterLoading(false))
    }, (err) => {
      dispatch(changeEnterLoading(false))
      console.log("[API ERROR] getAlbumDetail", err)
    })
  }

}