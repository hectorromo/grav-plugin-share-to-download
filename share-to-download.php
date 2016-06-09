<?php

namespace Grav\Plugin;

use Grav\Common\Page\Collection;
use Grav\Common\Plugin;
use Grav\Common\Uri;

class ShareToDownloadPlugin extends Plugin
{

	public static function getSubscribedEvents() 
	{
		return [
			'onPluginsInitialized' => ['onPluginsInitialized', 0],
		];
	}

	public function onPluginsInitialized() 
	{
		if ($this->isAdmin()) {
			$this->enabled = false;
			return;
		}
		// $uri = $this->grav['uri'];
		echo $uri;
	}

}

