export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly userId: string,
    public readonly price: number,
  ) {}

  toString() {
    console.log('Got Here');
    console.log(this.orderId);
    console.log(this.userId);
    console.log(this.price);

    return JSON.stringify({
      orderId: this.orderId,
      userId: this.userId,
      price: this.price,
    });
  }
}
