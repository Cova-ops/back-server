import iconv from 'iconv-lite'
import * as allMatchers from 'jest-extended'

const { __esModule, default: defaultMatcher, ...matchers } = allMatchers

iconv.encodingExists('foo')

expect.extend(matchers)
