<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'oldsmokey');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ';D:sA-uZ>RYh|%[|^6wp+MlJ&0XfP7OHrr~a/y.nT7!=VH-a?PJc35#`jpS:?f2v');
define('SECURE_AUTH_KEY',  'iywPVt 9EGTOb~;2@L7&rj:n3kt+[_W1n++b+% /Gm4X)cjmv$>Hz.x7s+rckp4=');
define('LOGGED_IN_KEY',    'mTR8%lLA?d[ZZGJW[zBU-BHhRfyoRA1]%44{f(TeGZ)Nr:^P|XzO7PGtc)c@>U5k');
define('NONCE_KEY',        'Z|LBPjYf.ZXz7Vak2Dt>-K:&|%-Fl|OqsJW3c2_ OTM+>+{>2%j Q=Alb+,(=7AT');
define('AUTH_SALT',        'Pd_a^0v}2Kv{=()LKUFFgSj4h,aAUzF2BZD`iyOQF4r9)X<3T,fC|E0%iTR.I8!t');
define('SECURE_AUTH_SALT', 'XWG|f]fO6t+mioQo.==):Aq1odw|DT{*uFvSz]>0bfr0$(4zPCm]+8DKZ[P/C&t{');
define('LOGGED_IN_SALT',   '~*jo`mL7]+L#s{=p(H)+3@!5B>=H?Z/E8Ew07rvJt``vA#tinSP!&%|-|w2nCe48');
define('NONCE_SALT',       'SZF3h_`Kz8s.47NM&&MR-rr1s!}[~Cb?WZ;nh([TED7#3;Dy)^41+BmX/[XN#v|j');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
