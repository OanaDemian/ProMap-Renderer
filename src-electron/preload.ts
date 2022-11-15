import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getMaps: () => ipcRenderer.invoke('maps:findCommunityMaps'),
  pathToMaps: () => ipcRenderer.invoke('maps:path'),
  mapData: (mapId: string) => ipcRenderer.invoke('maps:mapData', mapId),
  navigateToMap: (mapId: string) => ipcRenderer.invoke('navigate:toMap', mapId),
  currentMap: () => ipcRenderer.invoke('map:currentMap'),
});