import { storiesOf } from '@storybook/vue';
import Hero from '../Hero.vue';
import Container from '../Container.vue';
import 'bulma';
var components = {
  Hero: Hero,
  Container: Container
};

function render(template) {
  return {
    template: template,
    components: components
  };
}

storiesOf(Hero.name, module).add('default', function () {
  return render("\n      <Hero tag=section>\n        <Container>\n          <h1 class=\"title\">\n            Hero title\n          </h1>\n          <h2 class=\"subtitle\">\n            Hero subtitle\n          </h2>\n        </Contain>\n      </Hero>\n      ");
}).add('colors', function () {
  return render("\n      <div>\n        <Hero tag=section color=primary>\n          <Container>\n            <h1 class=\"title\">\n              Primary title\n            </h1>\n            <h2 class=\"subtitle\">\n              Primary subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=info>\n          <Container>\n            <h1 class=\"title\">\n              Info title\n            </h1>\n            <h2 class=\"subtitle\">\n              Info subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=success>\n          <Container>\n            <h1 class=\"title\">\n              Success title\n            </h1>\n            <h2 class=\"subtitle\">\n              Success subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=warning>\n          <Container>\n            <h1 class=\"title\">\n              Warning title\n            </h1>\n            <h2 class=\"subtitle\">\n              Warning subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=danger>\n          <Container>\n            <h1 class=\"title\">\n              Danger title\n            </h1>\n            <h2 class=\"subtitle\">\n              Danger subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=dark>\n          <Container>\n            <h1 class=\"title\">\n              Dark title\n            </h1>\n            <h2 class=\"subtitle\">\n              Dark subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=light>\n          <Container>\n            <h1 class=\"title\">\n              Light title\n            </h1>\n            <h2 class=\"subtitle\">\n              Light subtitle\n            </h2>\n          </Contain>\n        </Hero>\n      </div>\n      ");
}).add('bold', function () {
  return render("\n      <div>\n        <Hero tag=section color=primary bold size=medium>\n          <Container>\n            <h1 class=\"title\">\n              Primary title\n            </h1>\n            <h2 class=\"subtitle\">\n              Primary subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=info bold size=medium>\n          <Container>\n            <h1 class=\"title\">\n              Info title\n            </h1>\n            <h2 class=\"subtitle\">\n              Info subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=success bold size=medium>\n          <Container>\n            <h1 class=\"title\">\n              Success title\n            </h1>\n            <h2 class=\"subtitle\">\n              Success subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=warning bold size=medium>\n          <Container>\n            <h1 class=\"title\">\n              Warning title\n            </h1>\n            <h2 class=\"subtitle\">\n              Warning subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=danger bold size=medium>\n          <Container>\n            <h1 class=\"title\">\n              Danger title\n            </h1>\n            <h2 class=\"subtitle\">\n              Danger subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=dark bold size=medium>\n          <Container>\n            <h1 class=\"title\">\n              Dark title\n            </h1>\n            <h2 class=\"subtitle\">\n              Dark subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=light bold size=medium>\n          <Container>\n            <h1 class=\"title\">\n              Light title\n            </h1>\n            <h2 class=\"subtitle\">\n              Light subtitle\n            </h2>\n          </Contain>\n        </Hero>\n      </div>\n      ");
}).add('sizes', function () {
  return render("\n      <div>\n        <Hero tag=section color=primary>\n          <Container>\n            <h1 class=\"title\">\n              Default title\n            </h1>\n            <h2 class=\"subtitle\">\n              Default subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=info size=small>\n          <Container>\n            <h1 class=\"title\">\n              Small title\n            </h1>\n            <h2 class=\"subtitle\">\n              Small subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=success size=medium>\n          <Container>\n            <h1 class=\"title\">\n              Medium title\n            </h1>\n            <h2 class=\"subtitle\">\n              Medium subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        <Hero tag=section color=warning size=large>\n          <Container>\n            <h1 class=\"title\">\n              Large title\n            </h1>\n            <h2 class=\"subtitle\">\n              Large subtitle\n            </h2>\n          </Contain>\n        </Hero>\n        </Hero>\n        <Hero tag=section color=danger size=fullheight>\n          <Container>\n            <h1 class=\"title\">\n              Fullheight title\n            </h1>\n            <h2 class=\"subtitle\">\n            Fullheight subtitle\n            </h2>\n          </Contain>\n        </Hero>\n      ");
}).add('head & foot', function () {
  return render("\n      <Hero tag=section color=primary size=fullheight>\n        <Container slot=head>\n         In the head.\n        </Container>\n        <Container>\n          <h1 class=\"title\">\n            Default title\n          </h1>\n          <h2 class=\"subtitle\">\n            Default subtitle\n          </h2>\n        </Container>\n        <Container slot=foot>\n          In the foot.\n        </Container>\n      </Hero>\n      ");
});