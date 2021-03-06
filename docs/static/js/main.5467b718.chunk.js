/** @format */

// eslint-disable-next-line no-unused-expressions
(this.webpackJsonphooks = this.webpackJsonphooks || []).push([
	[0],
	{
		15: function (e, t, n) {},
		16: function (e, t, n) {
			'use strict';
			n.r(t);
			var c = n(1),
				o = n(8),
				a = n.n(o),
				r = n(2),
				d = n(3),
				i = n(9),
				s = function () {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case 'add':
							return [].concat(Object(i.a)(e), [t.payLoad]);
						case 'delete':
							return e.filter(function (e) {
								return e.id !== t.payLoad;
							});
						case 'toggle':
							return e.map(function (e) {
								return e.id === t.payLoad
									? Object(d.a)(Object(d.a)({}, e), {}, { done: !e.done })
									: e;
							});
						default:
							return e;
					}
				},
				l = n(0),
				u = function (e) {
					var t = e.todo,
						n = e.index,
						c = e.handleDelete,
						o = e.handleToggle;
					return Object(l.jsxs)(
						'li',
						{
							className: 'list-group-item',
							children: [
								Object(l.jsxs)('p', {
									className: ''.concat(t.done && 'complete'),
									onClick: function () {
										return o(t.id);
									},
									children: [n + 1, '. ', t.desc],
								}),
								Object(l.jsx)('button', {
									className: 'btn btn-danger',
									onClick: function () {
										return c(t.id);
									},
									children: 'Borrar',
								}),
							],
						},
						t.id
					);
				},
				j = function (e) {
					var t = e.todos,
						n = e.handleDelete,
						c = e.handleToggle;
					return Object(l.jsx)('ul', {
						className: 'list-group list-group-flush',
						children: t.map(function (e, t) {
							return Object(l.jsx)(
								u,
								{ todo: e, index: t, handleDelete: n, handleToggle: c },
								e.id
							);
						}),
					});
				},
				b = n(6),
				h = function (e) {
					var t = e.handleAddTodo,
						n = (function () {
							var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: {},
								t = Object(c.useState)(e),
								n = Object(r.a)(t, 2),
								o = n[0],
								a = n[1];
							return [
								o,
								function (e) {
									var t = e.target;
									a(
										Object(d.a)(
											Object(d.a)({}, o),
											{},
											Object(b.a)({}, t.name, t.value)
										)
									);
								},
								function () {
									a(e);
								},
							];
						})({ description: '' }),
						o = Object(r.a)(n, 3),
						a = o[0].description,
						i = o[1],
						s = o[2];
					return Object(l.jsxs)(l.Fragment, {
						children: [
							Object(l.jsx)('h4', { children: 'Agregar TODO' }),
							Object(l.jsx)('hr', {}),
							Object(l.jsxs)('form', {
								onSubmit: function (e) {
									if ((e.preventDefault(), !(a.trim().length <= 1))) {
										var n = { id: new Date().getTime(), desc: a, done: !1 };
										t(n), s();
									}
								},
								children: [
									Object(l.jsx)('input', {
										type: 'text',
										name: 'description',
										className: 'form-control',
										placeholder: 'Aprender...',
										autoComplete: 'off',
										value: a,
										onChange: i,
									}),
									Object(l.jsx)('button', {
										type: 'submit',
										className: 'btn btn-outline-primary mt-1 w-100',
										children: 'Agregar',
									}),
								],
							}),
						],
					});
				},
				p =
					(n(15),
					function () {
						return JSON.parse(localStorage.getItem('todos')) || [];
					}),
				O = function () {
					var e = Object(c.useReducer)(s, [], p),
						t = Object(r.a)(e, 2),
						n = t[0],
						o = t[1];
					Object(c.useEffect)(
						function () {
							localStorage.setItem('todos', JSON.stringify(n));
						},
						[n]
					);
					return Object(l.jsxs)('div', {
						children: [
							Object(l.jsxs)('h1', {
								children: ['Todo App ( ', n.length, ' )'],
							}),
							Object(l.jsx)('hr', {}),
							Object(l.jsxs)('div', {
								className: 'row',
								children: [
									Object(l.jsx)('div', {
										className: 'col-7',
										children: Object(l.jsx)(j, {
											todos: n,
											handleDelete: function (e) {
												o({ type: 'delete', payLoad: e });
											},
											handleToggle: function (e) {
												o({ type: 'toggle', payLoad: e });
											},
										}),
									}),
									Object(l.jsx)('div', {
										className: 'col-5',
										children: Object(l.jsx)(h, {
											handleAddTodo: function (e) {
												o({ type: 'add', payLoad: e });
											},
										}),
									}),
								],
							}),
						],
					});
				};
			a.a.render(Object(l.jsx)(O, {}), document.getElementById('root'));
		},
	},
	[[16, 1, 2]],
]);
//# sourceMappingURL=main.5467b718.chunk.js.map
