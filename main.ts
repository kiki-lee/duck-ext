namespace sprites {
    //% block="make sprite named $spriteName using $spriteImage of kind $spriteKind"
    export function set_up_sprite(spriteName: string, spriteKind: string, spriteImage: Image) {
        let mySprite = sprites.create(spriteImage, SpriteKind.Player)
        mySprite.ay = 500
        scene.cameraFollowSprite(mySprite)
    }
}

