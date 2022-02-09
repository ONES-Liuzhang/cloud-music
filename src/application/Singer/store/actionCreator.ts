import { fromJS } from 'immutable';
import { Dispatch } from 'react';
import { SingerActions, ArtistInfo, HotSongs } from './constans';
import { getSingerRequest } from '../../../api/request'

const changeArtist = (data: ArtistInfo): SingerActions => ({
  type: "singer/change_singer",
  data: fromJS(data) as ObjWithImmutable<ArtistInfo>
})

const changeHotSongs = (data: HotSongs): SingerActions => ({
  type: "singer/change_hotsong_list",
  data: fromJS(data) as ObjWithImmutable<HotSongs>
})


const changeEnterLoading = (data: boolean): SingerActions => ({
  type: "singer/change_enter_loading",
  data: data
})

export const getArtist = (id: number) => {
  return function (dispath: Dispatch<SingerActions>) {
    dispath(changeEnterLoading(true))

    getSingerRequest(id).then(res => {
      dispath(changeArtist(res.artist))
      dispath(changeHotSongs(res.hotSongs))
      dispath(changeEnterLoading(false))
    }, (err) => {
      dispath(changeEnterLoading(false))
      console.error("[API ERROR getArtist]", err)
    })
  }
}