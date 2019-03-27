const getRange = {
	x: (settings, width, height) => settings.reverseX ? [width, 0] : typeof settings.xRange === 'function' ? settings.xRange({ width, height }) : (settings.xRange || [0, width]),
	y: (settings, width, height) => settings.reverseY ? [height, 0] : typeof settings.yRange === 'function' ? settings.yRange({ width, height }) : (settings.yRange || [0, height]),
	r: (settings, width, height) => !settings.rRange ? [1, 25] : typeof settings.rRange === 'function' ? settings.rRange({ width, height }) : settings.rRange
};

export default function getDefaultRange (s, settings, width, height) {
	return getRange[s](settings, width, height);
}
