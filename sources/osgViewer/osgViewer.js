import Renderer from 'osgViewer/Renderer';
import View from 'osgViewer/View';
import Viewer from 'osgViewer/Viewer';
import Scene from 'osgViewer/Scene';
import InputGroups from 'osgViewer/input/InputConstants';

var osgViewer = {};

osgViewer.Renderer = Renderer;
osgViewer.View = View;
osgViewer.Viewer = Viewer;
osgViewer.Scene = Scene;
osgViewer.InputGroups = InputGroups;

export default osgViewer;
