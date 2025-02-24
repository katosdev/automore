<?php

/**
 *  This file is part of noriods/auto-more.
 *
 *  Copyright (c) 2019 .
 *
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 */
namespace katosdev\automore;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),
];
