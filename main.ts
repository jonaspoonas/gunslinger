namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hallo.vy == 0) {
        hallo.vy = -100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    otherSprite.destroy()
    music.baDing.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .................5555555........
        ................554444455.......
        ..............44222245544.......
        .................444444.........
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, hallo, 200, 0)
    music.pewPew.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile2, function (sprite, otherSprite) {
	
})
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.bigCrash.play()
    otherSprite.destroy()
})
let projectile: Sprite = null
let Bandits: Sprite = null
let coin: Sprite = null
let hallo: Sprite = null
hallo = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ...............eeeee............
    ...............eeeee............
    ..............eeeeeee...........
    ............eeeeeeeeeee.........
    ..............ffdfdfd...........
    ..............fddeeed...........
    ..............ddddbdd...........
    ..............444ddd4..fff......
    ..............424444422d........
    ..............4244444..f........
    ..............4d44444...........
    ..............444eeee...........
    ..............eeecccc...........
    ..............ceccccc...........
    ..............ccc.ccc...........
    ..............ccc.ccc...........
    ..............ccc.ccc...........
    ..............ece.ece...........
    ..............1eee1eeee.........
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(hallo)
controller.moveSprite(hallo, 100, 0)
hallo.ay = 200
info.setLife(3)
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    coin = sprites.create(img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ............fffffff............
        ..........ff5555554ff..........
        .........f5555f5f5544f.........
        .........f555fffff554f.........
        ........f555f5f5f5f554f........
        ........f555f5f5f55554f........
        ........f5555ff5f55554f........
        ........f55555fff55554f........
        ........f55555f5ff5554f........
        ........f55555f5f5f554f........
        ........f555f5f5f5f554f........
        .........f555fffff554f.........
        .........f5555f5f5544f.........
        ..........ff5555554ff..........
        ............fffffff............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `, SpriteKind.Coin)
    animation.runImageAnimation(
    coin,
    [img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ............fffffff............
        ..........ff5555554ff..........
        .........f5555f5f5544f.........
        .........f555fffff554f.........
        ........f555f5f5f5f554f........
        ........f555f5f5f55554f........
        ........f5555ff5f55554f........
        ........f55555fff55554f........
        ........f55555f5ff5554f........
        ........f55555f5f5f554f........
        ........f555f5f5f5f554f........
        .........f555fffff554f.........
        .........f5555f5f5544f.........
        ..........ff5555554ff..........
        ............fffffff............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `,img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        .............fffff.............
        ...........ff55554ff...........
        ..........f555f5f544f..........
        ..........f555fff554f..........
        .........f555ff5ff554f.........
        .........f555ff5f5554f.........
        .........f5555f5f5554f.........
        .........f5555fff5554f.........
        .........f5555f5f5554f.........
        .........f5555f5ff554f.........
        .........f555ff5ff554f.........
        ..........f555fff554f..........
        ..........f555f5f544f..........
        ...........ff55554ff...........
        .............fffff.............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `,img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ..............fff..............
        ............ff554ff............
        ...........f5555544f...........
        ...........f555f554f...........
        ..........f555f5f554f..........
        ..........f555f55554f..........
        ..........f555f55554f..........
        ..........f5555f5554f..........
        ..........f55555f554f..........
        ..........f55555f554f..........
        ..........f555f5f554f..........
        ...........f555f554f...........
        ...........f5555544f...........
        ............ff554ff............
        ..............fff..............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `,img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............f...............
        .............ff4ff.............
        ............f55544f............
        ............f55554f............
        ...........f555f554f...........
        ...........f555f554f...........
        ...........f555f554f...........
        ...........f555f554f...........
        ...........f555f554f...........
        ...........f555f554f...........
        ...........f555f554f...........
        ............f55554f............
        ............f55544f............
        .............ff4ff.............
        ...............f...............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `,img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............f...............
        ..............fff..............
        .............f544f.............
        .............f554f.............
        ............f55554f............
        ............f55554f............
        ............f55554f............
        ............f55554f............
        ............f55554f............
        ............f55554f............
        ............f55554f............
        .............f554f.............
        .............f544f.............
        ..............fff..............
        ...............f...............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `,img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............f...............
        ...............f...............
        ..............f4f..............
        ..............f4f..............
        .............f554f.............
        .............f554f.............
        .............f554f.............
        .............f554f.............
        .............f554f.............
        .............f554f.............
        .............f554f.............
        ..............f4f..............
        ..............f4f..............
        ...............f...............
        ...............f...............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `,img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............f...............
        ..............fff..............
        .............f544f.............
        .............f554f.............
        ............f55554f............
        ............f55554f............
        ............f55554f............
        ............f55554f............
        ............f55554f............
        ............f55554f............
        ............f55554f............
        .............f554f.............
        .............f544f.............
        ..............fff..............
        ...............f...............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `,img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............f...............
        .............ff4ff.............
        ............f55544f............
        ............f55554f............
        ...........f555f554f...........
        ...........f555f554f...........
        ...........f555f554f...........
        ...........f555f554f...........
        ...........f555f554f...........
        ...........f555f554f...........
        ...........f555f554f...........
        ............f55554f............
        ............f55544f............
        .............ff4ff.............
        ...............f...............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `,img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ..............fff..............
        ............ff554ff............
        ...........f5555544f...........
        ...........f555f554f...........
        ..........f555f5f554f..........
        ..........f555f55554f..........
        ..........f555f55554f..........
        ..........f5555f5554f..........
        ..........f55555f554f..........
        ..........f55555f554f..........
        ..........f555f5f554f..........
        ...........f555f554f...........
        ...........f5555544f...........
        ............ff554ff............
        ..............fff..............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `,img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        .............fffff.............
        ...........ff55554ff...........
        ..........f555f5f544f..........
        ..........f555fff554f..........
        .........f555ff5ff554f.........
        .........f555ff5f5554f.........
        .........f5555f5f5554f.........
        .........f5555fff5554f.........
        .........f5555f5f5554f.........
        .........f5555f5ff554f.........
        .........f555ff5ff554f.........
        ..........f555fff554f..........
        ..........f555f5f544f..........
        ...........ff55554ff...........
        .............fffff.............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `,img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ............fffffff............
        ..........ff5555554ff..........
        .........f5555f5f5544f.........
        .........f555fffff554f.........
        ........f555f5f5f5f554f........
        ........f555f5f5f55554f........
        ........f5555ff5f55554f........
        ........f55555fff55554f........
        ........f55555f5ff5554f........
        ........f55555f5f5f554f........
        ........f555f5f5f5f554f........
        .........f555fffff554f.........
        .........f5555f5f5544f.........
        ..........ff5555554ff..........
        ............fffffff............
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `],
    200,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
    Bandits = sprites.create(img`
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        .............ffffff............
        .............ffffff............
        .............fffffff...........
        ...........fffffffffff.........
        .............dfdfddd...........
        .............1222222...........
        .............212221d2..........
        ........fff..12121cc...........
        ..........fdbc22ccbc...........
        .............cccccbc...........
        .............cccccdc...........
        .............ccccccc...........
        .............cceeeee...........
        .............ee22222...........
        .............2222222...........
        .............2222222...........
        .............222.222...........
        .............222.222...........
        .............f2f.f2f...........
        .............fff.fff...........
        ...........ffff1fff1...........
        ...............................
        ...............................
        ...............................
        ...............................
        ...............................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Bandits, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    hallo.setImage(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...............eeeee............
        ...............eeeee............
        ..............eeeeeee...........
        ............eeeeeeeeeee.........
        ..............ffdfdfd...........
        ..............fddeeed...........
        ..............ddddbdd...........
        ..............444ddd4..fff......
        ..............424444422d........
        ..............4244444..f........
        ..............4d44444...........
        ..............444eeee...........
        ..............eeecccc...........
        ..............ceccccc...........
        ..............ccc.ccc...........
        ..............ccc.ccc...........
        ..............ccc.ccc...........
        ..............ece.ece...........
        ..............1eee1eeee.........
        `)
    if (hallo.vx < 0) {
        hallo.image.flipX()
    }
    if (hallo.vy < 0) {
        hallo.setImage(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ...............eeeee............
            ...............eeeee............
            ..............eeeeeee...........
            ............eeeeeeeeeee.........
            ..............ffdfdfd...........
            ..............fddeeed...........
            ..............ddddbdd...........
            ..............444ddd4..fff......
            ..............424444422d........
            ..............4244444..f........
            ..............4d44444...........
            ..............444eeee.e.........
            ..............eeecccc.e.........
            ............1ecccccccee.........
            ............ecccc.cccce.........
            ............eeccc.ccce1.........
            ............e...................
            ................................
            ................................
            `)
    } else {
    	
    }
})
forever(function () {
	
})
