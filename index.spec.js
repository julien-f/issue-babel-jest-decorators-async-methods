it('supports decorators on async methods', () => {
  const foo = () => {}

  class C {
    @foo
    async bar () {}
  }
})
